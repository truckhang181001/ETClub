@extends('layout')

@section('title','Cuộc thi')

@section('content')
    @include('InfoContestPage.info-contest--result__individual')
    @include('InfoContestPage.info-contest--result__team')
@endsection