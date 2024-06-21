const ContactUsDes = ({ text }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: text ?? "" }}></div>
    </>
  );
};
export default ContactUsDes;
