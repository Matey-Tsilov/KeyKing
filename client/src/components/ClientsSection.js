export const ClientsSection = () => {
   return (
    <section className="clients section-padding">
    <div className="container">
        <div className="row align-items-center">

            <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Companies I've had worked</h3>
            </div>

            <div className="col-lg-2 col-4 ms-auto clients-item-height">
                <img src="images/clients/cachet.svg" className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 clients-item-height">
                <img src="images/clients/guitar-center.svg" className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 clients-item-height">
                <img src="images/clients/tokico.svg" className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 clients-item-height">
                <img src="images/clients/shopify.svg" className="clients-image img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-4 me-auto clients-item-height">
                <img src="images/clients/profil-rejser.svg" className="clients-image img-fluid" alt="" />
            </div>

        </div>
    </div>
</section>
)
}