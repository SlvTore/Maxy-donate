import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Datatransaksi = () => {
  const customers = [
    {
      no: 1,
      nama: 'Mark',
      email: 'mark@gmail.com',
      noHp: '123456',
      total: 1000000,
      catatan: 'semoga donasi ini membantu',
      program: 'Program A',
      status: 'Aktif'
    },
    {
      no: 2,
      nama: 'Jacob',
      email: 'jacob@gmail.com',
      noHp: '789012',
      total: 500000,
      catatan: 'semoga terbantu ya',
      program: 'Program B',
      status: 'Tidak Aktif'
    },
    {
      no: 3,
      nama: 'Larry the Bird',
      email: 'larry@gmail.com',
      noHp: '345678',
      total: 2000000,
      catatan: 'saya yakin ini adalah yang terbaik',
      program: 'Program C',
      status: 'Aktif'
    }
  ];

  return (
    <div>
      <div className='container my-5'>
        <h1>Data Transaksi</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No. </th>
              <th scope="col">Nama</th>
              <th scope="col">E-mail</th>
              <th scope="col">No. Hp</th>
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
                <td>{customer.nama}</td>
                <td>{customer.email}</td>
                <td>{customer.noHp}</td>
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