# botchecker

### [Setup Container](container/readme.md)

### Configuration
Create `.env` or `config.json` file

####_Json_
```json
{
  "token": "bot_token",
  "botId": "bot_client_id",
  "guildId": "target_user_guild_id",
  "targetId": "target_id",
  "devId": "developer_id",
  "fileName": "initial_file",
  "interval": "time_interval"
}
```

####_Env_
```dotenv
token="bot_token"
botId="bot_client_id"
guildId="target_user_guild_id"
targetId="target_id"
fileName="initial_file"
devId:"developer_id"
interval:time_interval
```
