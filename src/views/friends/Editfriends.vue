<template>
    <div class="editfriends">
     <form action="/mahasiswa" method="POST">

<div class="form-group" >
<label for="id">Id</label>
<input type="text" class="form-control" id="Id"
                    name="Id" placeholder="Id"
                    value="">
</div>

<div class="form-group">
<label for="nama">Nama Mahasiswa</label>
<input type="text" class="form-control" id="nama"
                    name="nama_mahasiswa" placeholder="Nama mahasiswa"
                    value="">
</div>

<div class="form-group">
<label for="alamat">Alamat</label>
<input type="text" class="form-control" id="alamat"
                    name="alamat" placeholder="Alamat"
                    value="">

</div>
<div class="form-group">
<label for="no_tlp">No. HP</label>
<input type="text" class="form-control" id="no_tlp"
                    name="no_tlp" placeholder="no_tlp"
                    value="">
</div>
<div class="form-group">
<label for="email">Email</label>
<input type="email" class="form-control" id="email"
                    name="email" aria-describedby="emailHelp"
                    placeholder="Enter email" value="">
</div>
<button type="submit" class="btn btn-primary">Simpan</button>
</form>
    </div>    
</template>