export function Body () {
    const students = [
        {id: 'HE180001', name: 'Nguyen Van Chien', address: 'HaNoi', img: '/student1.jpg'},
        {id: 'HE180002', name: 'Tran Le Thanh', address: 'Hue', img: '/student2.jpg'},
        {id: 'HE180003', name: 'Hoang Tan Thanh', address: 'QuangBinh', img: '/student3.jpg'},
        {id: 'HE180004', name: 'Nguyen Thai Duong', address: 'TP.HCM', img: '/student4.jpg'}
    ];
    return (
        <div className ="container my-4">
            <div className="p-2 br-4" style={{
            backgroundColor: "#f2f2f2",
            border: "1px solid #ddd",
            borderRadius: "6px",
            width: "fit-content",
            }}>
                <span style={{ color: "orange"}}>Home</span>  /{" "}
                <span>Students</span>
            </div>
                <h4 className="text-center">Student Detail</h4>
                <div className="row">
                    {students.map((student, index) => (
                    <div className="col-md-6 mb4 d-flex justify-content-center" key={index}>
                        <div className="card">
                            <img src={student.img} alt={student.name} className="card-img-top" style={{width:"550px", objectFit: "fill"}}/>
                            <div className="card-body text-center">
                                <p>{student.id}</p>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>{student.name}</span>
                                    <span>{student.address}</span>
                                </div>
                                <div className="d-flex justify-content-around mb-3">
                                    <div>
                                        <label className="me-3">
                                            <input type="radio" name={`status-${student.id}`} /> Absent
                                        </label>
                                        <label>
                                            <input type="radio" name={`status-${student.id}`} /> Present
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-warning text-white fw-bold">Submit</button>
                            </div>
                        </div>
                        
                    </div>
                    ))}
                </div>
        </div>
    )
}