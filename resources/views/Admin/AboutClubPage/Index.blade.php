@extends('Admin.layout')
@section('title','Thông tin câu lạc bộ')
@section('content')
    <div class="my-5 text-center">
        <h2>VỀ CÂU LẠC BỘ</h2>
    </div>
    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Mô tả ngắn:</label>
        <textarea class="form-control mb-2" rows="5"></textarea>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>

    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Lịch sử hình thành:</label>
        <textarea class="form-control mb-2" rows="5"></textarea>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>
    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Ảnh lịch sử hình thành:</label>
        <div class="my-2" style="text-align: center">
            <img src="/img/anh2.png" alt="Photo" style="max-width: 500px">
        </div>
        <div class="input-group my-3">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                aria-label="Upload">
        </div>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>

    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Tầm nhìn:</label>
        <textarea class="form-control mb-2" rows="5"></textarea>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>
    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Ảnh tầm nhìn:</label>
        <div class="my-2" style="text-align: center">
            <img src="/img/anh2.png" alt="Photo" style="max-width: 500px">
        </div>
        <div class="input-group my-3">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                aria-label="Upload">
        </div>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>

    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Sứ mệnh:</label>
        <textarea class="form-control mb-2" rows="5"></textarea>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>
    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Ảnh sứ mệnh:</label>
        <div class="my-2" style="text-align: center">
            <img src="/img/anh2.png" alt="Photo" style="max-width: 500px">
        </div>
        <div class="input-group my-3">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                aria-label="Upload">
        </div>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>
    <form class="row m-3 p-3 border rounded" method="" action="">
        <label class="form-label fw-bold my-2">Thành tựu đạt được:</label>
        <div class="row row-cols-3 m-0 mb-3 g-2">
            <div class="col">
                <input type="number" class="form-control" name="" placeholder="Năm hoạt động">
            </div>
            <div class="col">
                <input type="number" class="form-control" name="" placeholder="Thành viên">
            </div>
            <div class="col">
                <input type="number" class="form-control" name="" placeholder="Cựu thành viên">
            </div>
            <div class="col">
                <input type="number" class="form-control" name="" placeholder="Workshop - Talkshow">
            </div>
            <div class="col">
                <input type="number" class="form-control" name="" placeholder="Cuộc thi">
            </div>
            <div class="col">
                <input type="number" class="form-control" name="" placeholder="Kênh truyền thông">
            </div>
        </div>
        <div class="col" style="text-align:right;">
            <button class="btn btn-primary" type="submit">Lưu</button>
            <button class="btn btn-danger" type="button">Reset</button>
        </div>
    </form>
@endsection