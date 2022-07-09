import * as React from 'react';
import deliveryClient from '../../lib/headless_cms/delivery';


const PagePath = (props) => {
    console.log('PagePath', props);
    return <div>page</div>
}

export default PagePath;

export async function getStaticPaths() {
    const paths = [];
    const endpoints = await deliveryClient.endpoints('page');

    endpoints.forEach((endpoint) => {
        paths.push({
            params: {page: endpoint}
        })
    })

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    const entry = await deliveryClient.entry('page', 'slug', params.page);
    
    if(entry) {
        return {
            props: { ...entry },
            revalidate: 30,
        }
    }

    return {
        notFound: true
    }
   
}
