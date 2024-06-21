const AboutUsDes = ({ text }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: text ?? "" }}></div>
    </>
  );
};
export default AboutUsDes;
