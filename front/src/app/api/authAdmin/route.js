import { NextResponse } from "next/server";


const Api = process.env.NEXT_PUBLIC_API;

export async function POST(req, res) {
    const response = await req.json();
    console.log(response);
    try {
        const { user, password, zone } = response;
        const resAxios = await fetch(Api + `/authAdmin/`, {
            body: JSON.stringify({
                username: user,
                password: password,
                zone: zone,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        console.log(resAxios);
        if (resAxios.status != 200) {
            const errorText = await resAxios.text();
            throw new Error(`Error en la solicitud al servidor: ${errorText}`);
        }

        const { data } = await resAxios.json();
        return NextResponse.json({
            ...data,
        });

    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                statusCode: 500,
                message: err.message,
            },
            {
                status: 500,
            }
        );
    }
}
