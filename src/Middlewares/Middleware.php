<?php

namespace Tualo\Office\Contenteditable\Middlewares;

use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\IMiddleware;

class Middleware implements IMiddleware
{
    public static function register()
    {
        App::use('contenteditable', function () {
            try {
                // App::javascript('contenteditable_loader', './contenteditable/loader.js',[],1000);
            } catch (\Exception $e) {
                App::set('maintanceMode', 'on');
                App::addError($e->getMessage());
            }
        }, -100);
    }
}
