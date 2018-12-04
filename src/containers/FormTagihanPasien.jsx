import React from 'react';

export const FormTagihanPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Tagihan Pasien</h2>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>

            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.pasien.tanggalTagihan ? "" : props.pasien.tanggalTagihan}/>
            </div>

            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" defaultValue={!props.pasien.jumlahTagihan ? "" : props.pasien.jumlahTagihan}/>
            </div>

            <button className="btn btn-success" value="submit">Tambah Tagihan</button>
        </form>
    )
}