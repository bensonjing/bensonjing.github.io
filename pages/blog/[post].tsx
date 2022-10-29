export default function post() {}

export async function getStaticProps({ params }) {
  console.log(params.id);

  return params.id;
}
