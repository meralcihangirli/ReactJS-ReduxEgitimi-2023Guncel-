function Course({ id, content, title, price,removeOneCourse }) {
    console.log(id);
    console.log(content);

    return <div className="card">
        <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
            <p className="cardContent">{content}</p>
        </div>
        <button className="cardDeleteBtn" onClick={()=>removeOneCourse(id)}>Sil</button>
    </div>;
}

export default Course;