import { useRef } from 'react';
import Layout from '../../components/layout';

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

  const handleSubmit = () => {

  }
  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder='id' required ref={idRef}/>
        <br />
        <input 
          type="text" 
          name="id" 
          placeholder='title' 
          required ref={titleRef}/>
        <br />
        <textarea 
          type="text" 
          name="content" 
          placeholder='content' 
          required ref={contentRef}
        />
      </form>
    </Layout>
  )
}
