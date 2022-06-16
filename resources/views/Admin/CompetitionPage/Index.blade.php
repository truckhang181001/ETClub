@extends('Admin.layout')
@section('title','Quản lý cuộc thi')
@section('content')
<div class="row row-cols-3 g-3 m-3">
  @for ($i = 0; $i < 20; $i++) <div class="col">
    <div class="card" style="width: 18rem;">
      <img src="/img/anh2.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Cuộc thi TECHCONOMY</h5>
        <p class="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of
          the card's
          content.</p>
        <a href="#" class="btn btn-primary">Xem chi tiết</a>
      </div>
    </div>
</div>
@endfor
</div>
@endsection