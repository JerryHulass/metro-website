export default function Banner() {
    return (
        <section className="banner bg-blue-600 text-white p-6 flex flex-col items-center sm:flex-row">
            <div className="gap-5 flex">
                <img src="public/assets/best-prices.svg" alt="best prices" className=""/>
                <div className="pb-5">
                    <h1>Best Prices</h1>
                    <p>All mechanical repairs and services are available at affordable rates</p>
                </div>
            </div>

            <div className="gap-5 flex">
                <img src="public/assets/guarantee.svg" alt="guarantee" />
                <div className="pb-5" >
                    <h1>100% Guarantee</h1>
                    <p>All of our repairs and services come with a guarantee period</p>
                </div>
            </div>

            <div className="gap-5 flex">
                <img src="public/assets/certified.svg" alt="certified" />
                <div className="pb-5">
                    <h1>Certified Mechanics</h1>
                    <p>Established in 1999, we bring over two decades of trusted auto-body experience.</p>
                </div>
            </div>

        </section>
    );
}