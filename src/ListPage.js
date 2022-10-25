import Template from "./Template";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((template) => (
    <Template key={template.action} template={template} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching templates</p>
    </article>
  );

  return <main>{content}</main>;
};
export default ListPage;
