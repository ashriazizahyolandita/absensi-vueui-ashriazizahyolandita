<template>
    <div class="editsabsen">
     <form action="/absen" method="POST">

<div class="form-group" >
<label for="id">Id</label>
<input type="text" class="form-control" id="Id"
                    name="Id" placeholder="Id"
                    value="">
</div>

<div class="form-group">
<label for="nama">Waktu Absen</label>
<input type="text" class="form-control" id="nama"
                    name="waktu_absen" placeholder="waktu absen"
                    value="">
</div>

<div class="form-group">
<label for="alamat">Nama Mahasiswa</label>
<input type="text" class="form-control" id="nama_mahasiswa"
                    name="nama_mahasiswa" placeholder="Nama mahasiswa"
                    value="">

</div>
<div class="form-group">
<label for="matakuliah">Matakuliah</label>
<input type="text" class="form-control" id="matakuliah"
                    name="matakuliah" placeholder="Matakuliah"
                    value="">
</div>
<div class="form-group">
<label for="keterangan">Keterangan</label>
<input type="text" class="form-control" id="keterangan"
                    name="kketerangan" aria-describedby="Keterangan"
                    placeholder="Keterangan" value="">
</div>
<button type="submit" class="btn btn-primary">Simpan</button>
</form>
    </div>    
</template>