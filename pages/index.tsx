import { NextSeo } from "next-seo";
import { HomePage } from "../src/components/HomePage";

export default () => {
    return (
        <>
            <NextSeo
                title="Home"
                titleTemplate="React + TypeScript + Next.js Starter | %s"
                description="A starter codebase built with React + TypeScript + Next.js"
            />
            <HomePage />
        </>
    );
};
