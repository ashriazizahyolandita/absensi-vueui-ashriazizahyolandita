<template>
    <div class="editmatakuliah">
     <form action="/matakuliah" method="POST">

<div class="form-group" >
<label for="id">Id</label>
<input type="text" class="form-control" id="Id"
                    name="Id" placeholder="Id"
                    value="">
</div>

<div class="form-group">
<label for="nama">Matakuliah</label>
<input type="text" class="form-control" id="matakuliah"
                    name="matakuliah" placeholder="matakuliah"
                    value="">
</div>
<div class="form-group">
<label for="nama">sks</label>
<input type="text" class="form-control" id="sks"
                    name="sks" aria-describedby="sks"
                    placeholder="sks" value="">
</div>
<button type="submit" class="btn btn-primary">Simpan</button>
</form>
    </div>    
</template>