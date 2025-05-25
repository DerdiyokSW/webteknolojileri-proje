<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$API_KEY = '3ea1340d5d5b664e8b8cf8707ed236e3';
$url = "http://api.mediastack.com/v1/news?access_key=" . $API_KEY . "&categories=sports&languages=en&keywords=nba&limit=10";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo json_encode([
        'error' => true,
        'message' => curl_error($ch)
    ]);
} else {
    $newsData = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode([
            'error' => true,
            'message' => 'Failed to parse API response: ' . json_last_error_msg()
        ]);
    } else if (isset($newsData['error'])) {
        echo json_encode([
            'error' => true,
            'message' => $newsData['error']['message'] ?? 'Unknown API error'
        ]);
    } else {
        // Convert MediaStack API format to match frontend's expected format
        $convertedData = [
            'data' => array_map(function($article) {
                return [
                    'title' => $article['title'],
                    'description' => $article['description'],
                    'image' => $article['image'],
                    'url' => $article['url'],
                    'published_at' => $article['published_at']
                ];
            }, $newsData['data'] ?? [])
        ];
        
        echo json_encode($convertedData);
    }
}

curl_close($ch);
?>
