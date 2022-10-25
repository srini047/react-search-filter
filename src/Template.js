const Template = ({ template }) => {
  return (
    <article>
      <h2>Title: {template.notebook}</h2>
      <h4>Tool: {template.tool}</h4>
      <p>Tags: {template.tags + '\t'}</p>
      {/* {template.action} */}
    </article>
  );
};
export default Template;
