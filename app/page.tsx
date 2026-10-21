import pages from '../content/pages.json';
export const metadata={title:pages.home.title,description:pages.home.description};
export default function Home(){return <div dangerouslySetInnerHTML={{__html:pages.home.html}}/>}
