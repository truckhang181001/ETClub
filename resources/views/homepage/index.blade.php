{{-- Bat buoc co --}}
@extends('layout')
{{-- Title cua trang --}}
@section('title','Trang chủ')
{{-- Bat buoc co --}}
@section('content')
    @include('HomePage.Banner')
    @include('HomePage.Introduction')
    @include('HomePage.Tech-corner')
@endsection