
@extends('layout')

@section('title','Ban chủ nhiệm')

@section('content')
    <!--mobile-->
    @include('CoreteamPage.mobileHeader')
    @include('CoreteamPage.mobileContent')
    @include('CoreteamPage.mobileIntro')
    <!--desktop-->
    @include('CoreteamPage.deskHeader')
    @include('CoreteamPage.deskContent')
    @include('CoreteamPage.deskIntro')
@endsection