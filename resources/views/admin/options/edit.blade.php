@extends('layouts.app')

@section('content')
    <section class="content-header">
        <h1>
            Options
        </h1>
    </section>
    <div class="content">
       @include('adminlte-templates::common.errors')
       <div class="box box-primary">
           <div class="box-body">
               <div class="row">
                   {!! Form::model($options, ['route' => ['admin.options.update', $options->id], 'method' => 'patch']) !!}

                        @include('admin.options.fields')

                   {!! Form::close() !!}
               </div>
           </div>
       </div>
    </div>
@endsection