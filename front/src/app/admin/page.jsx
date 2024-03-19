'use client'

const array = [
    {
        "_id": "65f9f42560b0b15338bdec82",
        "name": "Reid Delaney",
        "cedula": "(931)489-2096",
        "email": "reiddelaney@canopoly.com",
        "phone": "+1 (891) 594-3518"
    },
    {
        "_id": "65f9f42539ae62793e45620d",
        "name": "Ortega Glover",
        "cedula": "(894) 400-2869",
        "email": "ortegaglover@canopoly.com",
        "phone": "+1 (840) 509-3127"
    },
    {
        "_id": "65f9f425f51ed29860bc7095",
        "name": "Maribel Ward",
        "cedula": "(914) 436-2488",
        "email": "maribelward@canopoly.com",
        "phone": "+1 (808) 512-2185"
    },
    {
        "_id": "65f9f425cad79eeafb2df0e0",
        "name": "Best Morales",
        "cedula": "(886) 419-3483",
        "email": "bestmorales@canopoly.com",
        "phone": "+1 (977) 514-3738"
    },
    {
        "_id": "65f9f42528d8c0bcf6e7d9c8",
        "name": "Mills Small",
        "cedula": "(893) 414-2155",
        "email": "millssmall@canopoly.com",
        "phone": "+1 (861) 568-3637"
    },
    {
        "_id": "65f9f42524294729acaeccaf",
        "name": "Chen Tyson",
        "cedula": "(923) 473-3620",
        "email": "chentyson@canopoly.com",
        "phone": "+1 (942) 542-2926"
    },
    {
        "_id": "65f9f42589bf167202418df2",
        "name": "Ada Henson",
        "cedula": "(814) 405-3428",
        "email": "adahenson@canopoly.com",
        "phone": "+1 (810) 440-3286"
    },
    {
        "_id": "65f9f4254882757fd24cf5f0",
        "name": "Witt Branch",
        "cedula": "(959) 472-2641",
        "email": "wittbranch@canopoly.com",
        "phone": "+1 (987) 414-3978"
    },
    {
        "_id": "65f9f42592cb6433995d548a",
        "name": "Weber Salinas",
        "cedula": "(902) 412-3372",
        "email": "webersalinas@canopoly.com",
        "phone": "+1 (889) 405-2642"
    },
    {
        "_id": "65f9f4251992fb75b2856ad9",
        "name": "Bryan Miranda",
        "cedula": "(800) 530-2980",
        "email": "bryanmiranda@canopoly.com",
        "phone": "+1 (857) 579-3042"
    },
    {
        "_id": "65f9f42557e8ec00358b0a57",
        "name": "Blanca Glenn",
        "cedula": "(923) 453-2452",
        "email": "blancaglenn@canopoly.com",
        "phone": "+1 (909) 580-2381"
    },
    {
        "_id": "65f9f42552312ac7ee973cfe",
        "name": "Gretchen Valencia",
        "cedula": "(923) 580-2185",
        "email": "gretchenvalencia@canopoly.com",
        "phone": "+1 (989) 524-3799"
    },
    {
        "_id": "65f9f425142f1f731c0b4e77",
        "name": "Owens Clarke",
        "cedula": "(836) 422-2297",
        "email": "owensclarke@canopoly.com",
        "phone": "+1 (831) 555-2203"
    },
    {
        "_id": "65f9f4252eadf3fb0b63c4f2",
        "name": "Fry Wise",
        "cedula": "(805) 554-3065",
        "email": "frywise@canopoly.com",
        "phone": "+1 (806) 423-3712"
    },
    {
        "_id": "65f9f425b1b2995166c6f203",
        "name": "Imogene Wells",
        "cedula": "(881) 440-3726",
        "email": "imogenewells@canopoly.com",
        "phone": "+1 (895) 447-2248"
    },
    {
        "_id": "65f9f42526c0f8d8d1e07743",
        "name": "Hudson Manning",
        "cedula": "(801) 475-3740",
        "email": "hudsonmanning@canopoly.com",
        "phone": "+1 (853) 525-2881"
    },
    {
        "_id": "65f9f4254eb90bb126ec92a5",
        "name": "Erickson Gross",
        "cedula": "(968) 569-2849",
        "email": "ericksongross@canopoly.com",
        "phone": "+1 (805) 493-2457"
    },
    {
        "_id": "65f9f4258a894c73cbc670f1",
        "name": "Marylou Roberson",
        "cedula": "(895) 600-3850",
        "email": "marylouroberson@canopoly.com",
        "phone": "+1 (845) 473-2710"
    },
    {
        "_id": "65f9f42576e82d9a083c398f",
        "name": "Tina Cooke",
        "cedula": "(885) 403-3819",
        "email": "tinacooke@canopoly.com",
        "phone": "+1 (952) 485-3755"
    },
    {
        "_id": "65f9f42547ae8482f11d6f67",
        "name": "Sheena May",
        "cedula": "(872) 457-2912",
        "email": "sheenamay@canopoly.com",
        "phone": "+1 (809) 553-3204"
    },
    {
        "_id": "65f9f42587948e3e74363412",
        "name": "Beulah Ramos",
        "cedula": "(857) 572-2112",
        "email": "beulahramos@canopoly.com",
        "phone": "+1 (982) 551-2372"
    },
    {
        "_id": "65f9f425dad404ff56d4811f",
        "name": "Phillips Lawrence",
        "cedula": "(982) 508-3492",
        "email": "phillipslawrence@canopoly.com",
        "phone": "+1 (920) 534-3626"
    },
    {
        "_id": "65f9f4254b28e7472259fee9",
        "name": "Chaney Franks",
        "cedula": "(939) 570-3991",
        "email": "chaneyfranks@canopoly.com",
        "phone": "+1 (890) 419-2276"
    },
    {
        "_id": "65f9f4253a442b8806adc5c4",
        "name": "Patel Workman",
        "cedula": "(996) 493-2751",
        "email": "patelworkman@canopoly.com",
        "phone": "+1 (833) 513-3245"
    },
    {
        "_id": "65f9f42544ff40b93863ea83",
        "name": "Griffith Sanford",
        "cedula": "(971) 485-2722",
        "email": "griffithsanford@canopoly.com",
        "phone": "+1 (806) 480-3468"
    },
    {
        "_id": "65f9f4255225abb74e230f73",
        "name": "Fleming Hendrix",
        "cedula": "(850) 461-3975",
        "email": "fleminghendrix@canopoly.com",
        "phone": "+1 (957) 535-3894"
    },
    {
        "_id": "65f9f4259151bc718f7d457d",
        "name": "Candice Dillon",
        "cedula": "(885) 533-3203",
        "email": "candicedillon@canopoly.com",
        "phone": "+1 (958) 591-3504"
    },
    {
        "_id": "65f9f42541565d85f1091e87",
        "name": "Yvonne Collins",
        "cedula": "(823) 433-2239",
        "email": "yvonnecollins@canopoly.com",
        "phone": "+1 (885) 509-3970"
    }
]


export default function Admin() {
    return (
        <>
            <nav className="fixed w-full bg-[#0034e3] h-14 flex flex-row justify-between p-4 items-center" >
                <img className="w-14 h-14 flex" src="/logo.png" alt="" />
                <div className="flex items-center">
                    <a href="/admin/login">Cerrar sesión</a>
                </div>
            </nav>
            <div className="flex flex-row">
                <section className="fixed h-[100vh] mt-14 bg-[#00006d] w-48 flex flex-col items-start p-4 gap-8">
                    <div className="font-bold">
                        Home
                    </div>
                    <div className="flex flex-col pl-4 gap-6">
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/group.svg" alt="" />
                            <p>Usuarios</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/bell.svg" alt="" />
                            <p>Notifiaciones</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/graphic.svg" alt="" />
                            <p>Gráficos</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 hover:cursor-pointer">
                            <img className="w-8 h-8" src="/user.svg" alt="" />
                            <p>Perfil</p>
                        </div>
                    </div>
                </section>

                <main className="bg-white text-black w-full min-h-[100vh] flex justify-center items-center pt-24">
                    <div className="w-full max-w-screen-md">
                        <h2 className="text-center mb-4 font-bold text-2xl">Listado de usuarios</h2>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Nombre</th>
                                    <th className="border px-4 py-2">Cédula</th>
                                    <th className="border px-4 py-2">Edad</th>
                                    <th className="border px-4 py-2">Correo electrónico</th>
                                </tr>
                            </thead>
                            <tbody>
                                {array.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2 w-full">{item.name}</td>
                                        <td className="border px-4 py-2 w-full">{item.cedula}</td>
                                        <td className="border px-4 py-2">{item.email}</td>
                                        <td className="border px-4 py-2">{item.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

        </>
    )
}