<template>
    <div class="createjadwal">
     <form action="/jadwal" method="POST">

<div class="form-group" >
<label for="id">Id</label>
<input type="text" class="form-control" id="Id"
                    name="Id" placeholder="Id"
                    value="">
</div>

<div class="form-group">
<label for="nama">Jadwal</label>
<input type="text" class="form-control" id="jadwal"
                    name="jadwal" placeholder="jadwal"
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