{{-- Bat buoc co --}}
@extends('layout')
{{-- Title cua trang --}}
@section('title','Trang chủ')
{{-- Bat buoc co --}}
@section('content')
    @include('NavBar')
    @include('HomePage.Banner')
    @include('HomePage.Introduction')
    @include('HomePage.Tech')
    @include('HomePage.Competition')
    @include('HomePage.Thinking')
    @include('Footer')
@endsection