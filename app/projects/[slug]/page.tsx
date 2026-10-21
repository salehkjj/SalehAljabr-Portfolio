import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import allPages from '../../../content/pages.json';
type PageData={title:string;description:string;html:string};
const pages:Record<string,PageData>=allPages;
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(pages).filter(slug=>slug!=='home').map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const page=pages[slug];return page?{title:page.title,description:page.description}:{}}
export default async function Project({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const page=pages[slug];if(!page||slug==='home')notFound();return <div dangerouslySetInnerHTML={{__html:page.html}}/>}
