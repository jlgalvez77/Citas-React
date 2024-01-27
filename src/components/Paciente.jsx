const Paciente = () => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Juan</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">Hook@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10 de Diciembre de 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Corporis officia asperiores 
            aliquam et eveniet laboriosam rem aperiam tempore alias, obcaecati 
            voluptatum perferendis! Fugit maiores eveniet excepturi iure 
            officia praesentium cupiditate!</span>
        </p> 
    </div>
    );
};

export default Paciente;