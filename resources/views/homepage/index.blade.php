{{-- Bat buoc co --}}
@extends('layout')
{{-- Title cua trang --}}
@section('title','Trang chủ')
{{-- Bat buoc co --}}
@section('content')
    @include('HomePage.Banner')
    @include('HomePage.Tech')
    @include('Homepage.Tech-corner')
    @include('HomePage.Competition')
@endsection