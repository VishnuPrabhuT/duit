import { useEffect } from "react";
// import "../sass/Home.sass";

function Applications() {
    useEffect(() => {
        getApplications();
    });

    return <main>Applications</main>;
}

async function getApplications() {
    let data = await fetch("/api/applications");
    console.log(await data.json());
}

export default Applications;
