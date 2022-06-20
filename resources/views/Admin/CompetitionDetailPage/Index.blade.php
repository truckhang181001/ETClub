@extends('Admin.layout')
@section('title','Quản lý cuộc thi')
@section('content')
  @include('Admin.CompetitionDetailPage.GeneralInfo')
  @include('Admin.CompetitionDetailPage.Stage')
  @include('Admin.CompetitionDetailPage.StageModal')
  @include('Admin.CompetitionDetailPage.Result')
  @include('Admin.CompetitionDetailPage.ResultModal')
  @include('Admin.CompetitionDetailPage.Sponsor')


@endsection