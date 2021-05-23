<template>
    <div class="createsemester">
     <form action="/semester" method="POST">

<div class="form-group">
<label for="nama">Id</label>
<input type="text" class="form-control" id="id"
                    name="id" placeholder="id"
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