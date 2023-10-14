interface Props {
  content: {
    Image: string;
    heading: string;
    description: string;
  };
}
export default function ValueCard({ content }: Props) {
  const { Image, heading, description } = content;
  return (
    <div>
      <div className="icon">
        <img src={Image} alt="" />
      </div>
      <div className="cnt">
        <div className="heading">{heading}</div>
        <div className="descrpition">{description}</div>
      </div>
    </div>
  );
}
