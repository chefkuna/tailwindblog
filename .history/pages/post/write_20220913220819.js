import { useRef } from 'react';
import Layout from '../../components/layout';

export default function Write() {
  const idRef = useRef();
  return (
    <Layout>
      <h1>Write a post</h1>
      <form>
        <input type="text" name="id" placeholder='id' required ref={idRef}/>
        <br />
        <input type="text" name="id" placeholder='id' required ref={idRef}/>
        <br />
        <textarea />
      </form>
    </Layout>
  )
}
