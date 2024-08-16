import AWS from "aws-sdk";
import { Readable } from "stream";

const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT!);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY!,
  secretAccessKey: process.env.DO_SPACES_SECRET!,
  region: "sfo3",
  s3ForcePathStyle: true,
  httpOptions: {
    timeout: 300000,
  },
});

function readableStreamToNodeStream(
  readableStream: ReadableStream<Uint8Array>
): Readable {
  const reader = readableStream.getReader();
  const nodeStream = new Readable({
    read() {
      reader
        .read()
        .then(({ done, value }) => {
          if (done) {
            nodeStream.push(null);
          } else {
            nodeStream.push(Buffer.from(value));
          }
        })
        .catch((err) => {
          nodeStream.destroy(err);
        });
    },
  });
  return nodeStream;
}

export async function uploadFileOnDigitalOcean(
  file: File
): Promise<string | undefined> {
  const bucketName = process.env.DO_SPACES_NAME!;
  const key = `${Date.now()}_${file.name}`;

  try {
    const nodeStream = readableStreamToNodeStream(file.stream());

    const result = await s3
      .upload({
        Bucket: bucketName,
        Key: key,
        Body: nodeStream,
        ContentType: file.type,
        ACL: "public-read",
      })
      .promise();

    return result.Location;
  } catch (error) {
    console.error("Error uploading file to DigitalOcean Spaces:", error);
    return undefined;
  }
}
