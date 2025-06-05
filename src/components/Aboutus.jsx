export default function Aboutus() {
    return (
        <>
        <div className="sm:flex sm:flex-row">
            <div className="">
                <img src="/src/assets/Group 147.jpg" alt="Repair Photo 1" className="sm:size[100%]" />
            </div>
            <div className="p-2">
                <div className="pt-5 pb-1 flex gap-1">
                    <img src="/src/assets/separator-carsblue.svg" alt="seperator icon" />
                    <p className="dm-sans-regular capitalize text-blue-600 font-bold">WHO WE ARE</p>
                </div>

                <div>
                    <h1 className="text-2xl days-one-regular font-bold">Car Service repairs and maintenance Certified</h1>

                    <p className="pt-2 pb-2">We are a full service automotive repair, maintenance shop and body work, serving all customers for many years of consistent and friendly service. We understand that sometimes car issue can be stressful and we do everything possible to make our customers feel welcome and satisfied with our service.</p>

                    <img src="/src/assets/thumb-2.jpg" alt="Repair Photo 2" />
                </div>
            </div>
        </div>
        </>
    )
};