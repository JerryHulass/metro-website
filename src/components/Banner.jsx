export default function Banner() {
    return (
        <section className="banner bg-blue-600 text-white p-6 pb-5 flex flex-col items-center sm:flex-row 2xl:px-16 2xl:py-4 2xl:pt-8">
            <div className="gap-5 flex">
                <img src="/images/best-prices.svg" alt="best prices" className=""/>
                <div className="2xl:pt-2">
                    <h1>Best Prices</h1>
                    <p>All collision repairs and services are available at affordable rates.</p>
                </div>
            </div>

            <div className="gap-5 flex">
                <img src="/images/guarantee.svg" alt="guarantee" />
                <div className="2xl:pt-2">
                    <h1>100% Guarantee</h1>
                    <p>All of our repairs and services come with a guarantee period.</p>
                </div>
            </div>

            <div className="gap-5 flex">
                <img src="/images/certified.svg" alt="certified" />
                <div className="2xl:pt-2">
                    <h1>Certified Technicians</h1>
                    <p className="2xl:pr-4">Established in 1999, we bring over two decades of trusted comprehensive collision repair.</p>
                </div>
            </div>

        </section>
    );
}