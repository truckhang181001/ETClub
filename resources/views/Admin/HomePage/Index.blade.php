@extends('Admin.layout')
@section('title','Trang chủ')
@section('content')
<div class="row m-3 p-3 border rounded">
    <label class="form-label my-2">Mô tả ngắn</label>
    <textarea class="form-control mb-2" rows="5"></textarea>
    <div class="col" style="text-align:right;">
        <button class="btn btn-primary">Lưu</button>
        <button class="btn btn-danger">Reset</button>
    </div>
</div>
<div class="row m-3 p-3 border rounded">
    <label class="form-label my-2">Ảnh lịch sử hình thành</label>
    <div class="my-2" style="text-align: center">
        <img src="/img/anh2.png" alt="Photo">
    </div>
    <div class="input-group my-3">
        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
            aria-label="Upload">
    </div>
    <div class="col" style="text-align:right;">
        <button class="btn btn-primary">Lưu</button>
        <button class="btn btn-danger">Reset</button>
    </div>
</div>
@endsection