{% method %}

# How to play audio on a call

### Play audio file to the resource

```http
POST https://api.catapult.inetwork.com/v1/users/{userId}/.../{Resrouce_Id}/audio HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v1
{
    "fileUrl": "MP3"
}
```

### Response

```http
HTTP/1.1 200 OK
```

### This sends these call backs

* Full callbacks http://dev.bandwidth.com/ap-docs/apiCallbacks/audio.html

```http
POST your_server.com HTTP/1.1
Content-Type: application/json; charset=utf-8
{
  "eventType": "string",
  "callId": "string",
  "callUri": "string",
  "status": "string",
  "time": "date",
  "tag": "string"
}
```

{% sample lang="js" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.playAudioFile("callId", "http://myurl.com/file.mp3").then(function (res) {});
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.playAudioFile("bridgeID", "http://myurl.com/file.mp3").then(function (res) {});
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.playAudioFile("conferenceID", "http://myurl.com/file.mp3").then(function (res) {});
```

### Play Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.playAudioFileToMember("conferenceID", "memberId", "http://myurl.com/file.mp3")
  .then(function (res) {});
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```js
client.Call.stopAudioFilePlayback("callId").then(function (res) {});
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```js
client.Bridge.stopAudioFilePlayback("bridgeID").then(function (res) {});
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```js
client.Conference.stopAudioFilePlayback("conferenceID").then(function (res) {});
```

### Stop Playing Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```js
client.Conference.stopAudioFilePlayback("conferenceID", "memberId").then(function (res) {});
```

{% sample lang="csharp" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "http://myurl.com/file.wav");
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.PlayAudioFileAsync("bridgeID", "http://myurl.com/file.wav");
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.PlayAudioFileAsync("{conferenceId1}", "http://myurl.com/file.mp3");
```

### Play Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.PlayAudioFileToMemberAsync("{conferenceId1}", "{memberId1}", "http://myurl.com/file.mp3");
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```csharp
await client.Call.PlayAudioFileAsync("{callId1}", "");
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```csharp
await client.Bridge.PlayAudioFileAsync("{bridgeId1}", "");
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```csharp
await client.Conference.PlayAudioFileAsync("{conferenceId1}", "");
```

### Stop Playing Audio to [specific conference member](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdMembersMemberIdAudio.html)
```csharp
await client.Conference.PlayAudioFileToMemberAsync("{conferenceId1}", "{memberId1}", "");
```

{% sample lang="ruby" %}

### Play Audio to [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:file_url => "http://myurl.com/file.wav"})
```

### Play Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:file_url => "http://myurl.com/file.wav"})
```

### Play Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:file_url => "http://myurl.com/file.wav"})
```

### Stop Playing Audio on [call](http://dev.bandwidth.com/ap-docs/methods/calls/postCallsCallIdAudio.html)
```ruby
call.play_audio({:file_url => ""})
```

### Stop Playing Audio to [bridge](http://dev.bandwidth.com/ap-docs/methods/bridges/postBridgesBridgeIdAudio.html)
```ruby
bridge.play_audio({:file_url => ""})
```

### Stop Playing Audio to [entire conference](http://dev.bandwidth.com/ap-docs/methods/conferences/postConferencesConferenceIdAudio.html)
```ruby
conference.play_audio({:file_url => ""})
```







{% endmethod %}




