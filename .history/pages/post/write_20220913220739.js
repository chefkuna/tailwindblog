import Layout from '../../components/layout';

export default function Write() {
  return (
    <Layout>
      <h1>Write a post</h1>
      <form>
        <input type="text" name="id" placeholder='id' required ref={idRef}/>
        <br />
        <input/>
        <br />
        <textarea />
      </form>
    </Layout>
  )
}
