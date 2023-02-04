<?php

namespace NotaMe\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orhanerday\OpenAi\OpenAi;

class Chat extends Model {

    use HasFactory;

    public $open_ai;
    public $open_key;

    public function __construct(string $key = null) {
        $key = (isset($key) ? $key : getenv('OPEN_AI_API_KEY'));

        $this->open_key = $key;
        $this->open_ai = new OpenAi($this->open_key);
    }

    public function sendMessage(string $message) {

        header('Content-type: text/event-stream');
        header('Cache-Control: no-cache');

        $opts = [
            'prompt' => $message,
            'temperature' => 0.9,
            "max_tokens" => 150,
            "frequency_penalty" => 0,
            "presence_penalty" => 0.6,
            "stream" => true,
        ];

        $this->open_ai->completion($opts, function ($curl_info, $data) {
            echo $data . "<br><br>";
            echo PHP_EOL;
            ob_flush();
            flush();
            return strlen($data);
        });
    }

    public function showMessage($message) {
        return " <div id='divID'>Hello</div>
<script>
   var eventSource = new EventSource('/');
   var div = document.getElementById('divID');


   eventSource.onmessage = function (e) {
      if(e.data == '[DONE]')
      {
          div.innerHTML += '<br><br>Hello';
      }
       div.innerHTML += JSON.parse(e.data).choices[0].text;
   };
   eventSource.onerror = function (e) {
       console.log(e);
   };
</script>";
    }

}
