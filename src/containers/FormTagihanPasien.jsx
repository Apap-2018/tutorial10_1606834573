import React from 'react';

export const FormTagihanPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Tagihan Pasien</h2>
            <input type="hidden" name="pasien.nama" value={props.pasien.nama} />
            <div className="form-group">
                <label>ID Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="pasien.id" defaultValue={props.pasien.id} readOnly/>
            </div>

            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.pasien.tanggalTagihan ? "" : props.pasien.jumlahTagihan}/>
            </div>

            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" defaultValue={!props.pasien.jumlahTagihan ? "" : props.pasien.jumlahTagihan}/>
            </div>

            <button className="btn btn-success" value="submit">Tambah Tagihan</button>
        </form>
    )
}