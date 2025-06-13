export default function Aboutus() {
    return (
        <>
        <div className="sm:flex sm:flex-row justify-">
            <div className="w-full sm:w-3/5 p-2 justify-items-center self-center">
                <img src="/images/bmwx3.jpeg" alt="who we are 1" className="max-h-[30rem]" />
            </div>
            <div className="w-full sm:w-2/5 p-2">
                <div className="pt-5 pb-1 flex gap-1">
                    <img src="/images/separator-carsblue.svg" alt="seperator icon" />
                    <p className="dm-sans-regular capitalize text-blue-600 font-bold">WHO WE ARE</p>
                </div>

                <div className="pb-2 sm:pr-1 lg:pr-2">
                    <h1 className="text-2xl days-one-regular font-bold capitalize">Car Service repairs and maintenance Certified</h1>

                    <p className="pt-2 pb-2">We are a full service automotive repair, maintenance shop and body work, serving all customers for many years of consistent and friendly service. We understand that sometimes car issue can be stressful and we do everything possible to make our customers feel welcome and satisfied with our service.</p>

                    <img src="/images/pops-1.jpeg" alt="who we are 2" />
                </div>
            </div>
        </div>
        </>
    )
};