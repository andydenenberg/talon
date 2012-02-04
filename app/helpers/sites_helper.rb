module SitesHelper
  
  def server_state_color(status)
    if status == 'SERVER_OK'
       color = 'label-success' 
    elsif status == 'UNABLE_TO_CONNECT'
       color = 'label-important'
    elsif status == "NO_MATCH" || status == "WARNING"
       color = 'label-warning'
    else
       color = 'label-info'
    end
    return color
  end
    
end
