<template>
    <div class="createkontrakmatakuliah">
     <form action="/kontrakmatakuliah" method="POST">

<div class="form-group">
<label for="nama">Nama Mahasiswa</label>
<input type="text" class="form-control" id="nama_mahasiswa"
                    name="nama_mahasiswa" placeholder="Nama mahasiswa"
                    value="">
</div>
<div class="form-group">
<label for="nama">Semester</label>
<input type="text" class="form-control" id="semester"
                    name="semester" aria-describedby="semester"
                    placeholder="Semester" value="">
</div>
<button type="submit" class="btn btn-primary">Simpan</button>
</form>
    </div>    
</template>