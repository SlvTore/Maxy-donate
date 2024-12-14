import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../../assets/logodonate.png';

const Datatransaksi = () => {
  const customers = [
    {
      no: 1,
      tanggal: '2023-01-01',
      total: 1000000,
      catatan: 'semoga donasi ini membantu',
      program: 'Program A',
      status: 'Aktif'
    },
    {
      no: 2,
      tanggal: '2023-02-01',
      total: 500000,
      catatan: 'semoga terbantu ya',
      program: 'Program B',
      status: 'Tidak Aktif'
    },
    {
      no: 3,
      tanggal: '2023-03-01',
      total: 2000000,
      catatan: 'saya yakin ini adalah yang terbaik',
      program: 'Program C',
      status: 'Aktif'
    }
  ];

  return (
    <div>
      <div className='container my-5'>
        <h1 className='fw-bold text-primary'>Data Transaksi</h1>
       <div className="d-flex justify-content-center">
         <img src={logo} className="img-fluid" style={{ height: 700, width: 700, position: 'absolute', zIndex: -1, right: 0, top: '10%', opacity: 0.5 }} />
       </div>
        <table className="table table-hover table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">No. </th>
              <th scope="col">Tanggal</th>
              <th scope="col">Total</th>
              <th scope="col">Catatan</th>
              <th scope="col">Program yang dipilih</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <th scope="row">{customer.no}</th>
                <td>{customer.tanggal}</td>
                <td>{customer.total}</td>
                <td>{customer.catatan}</td>
                <td>{customer.program}</td>
                <td>
                  {customer.status === 'Aktif' ? (
                    <span className="badge bg-success">Sudah di bayar</span>
                  ) : (
                    <span className="badge bg-danger">Belum di bayar</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Datatransaksi