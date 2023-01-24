

const ItemDetail = ({params}) => {
    return (
        <div className="col-3">
            <article className="card">
                <div className="card-body">
                    <h3 className="card-title text-center">{params}</h3>
                </div>
                <p className="text-center pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam veniam odit, asperiores ipsam laborum aliquid. 
                Aliquam hic asperiores laborum ducimus velit aspernatur 
                dolorum voluptatum eveniet!</p>
            </article>
        </div>
    )
}

export default ItemDetail;