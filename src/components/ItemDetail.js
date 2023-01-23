

const ItemDetail = ({params}) => {
    return (
        <div className="col-3">
            <article className="card">
                <div className="card-body">
                    <h3 className="card-title">{params}</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam veniam odit, asperiores ipsam laborum aliquid. 
                Aliquam hic asperiores laborum ducimus velit aspernatur 
                dolorum voluptatum eveniet!</p>
            </article>
        </div>
    )
}

export default ItemDetail;