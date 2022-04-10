{{-- Bat buoc co --}}
@extends('layout')
{{-- Title cua trang --}}
@section('title','Trang chủ')
{{-- Bat buoc co --}}
@section('content')
    @include('HrDepartmentPage.HrDepartment')
    @include('HrDepartmentPage.ActivityPicture')
@endsection